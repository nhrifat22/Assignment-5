import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechCard from "./components/TechCard";
import YourStack from "./components/YourStack";

function App() {
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stack, setStack] = useState([]);

  // load data from the json file when the page opens
  useEffect(() => {
    fetch("/technologies.json")
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      });
  }, []);

  function handleAdd(tech) {
    const alreadyAdded = stack.find((item) => item.id === tech.id);

    if (alreadyAdded) {
      toast.warning(tech.name + " is already in your stack");
      return;
    }

    setStack([...stack, tech]);
    toast.success(tech.name + " added to your stack");
  }

  function handleRemove(id) {
    const newStack = stack.filter((item) => item.id !== id);
    setStack(newStack);
    toast.info("Technology removed");
  }

  function handleRemoveAll() {
    setStack([]);
    toast.info("All technologies removed");
  }

  return (
    <div>
      <Navbar />
      <Hero />

      <section id="technologies" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold">
          Explore the <span className="text-brand">Technologies</span>
        </h2>
        <p className="mt-2 text-gray-500">
          Pick one technology per category to build your ideal stack.
        </p>

        {loading ? (
          <p className="py-20 text-center text-gray-500">Loading...</p>
        ) : (
          <div className="mt-8 grid lg:grid-cols-4 gap-6">
            <div className="order-first lg:order-last self-start">
              <YourStack
                stack={stack}
                onRemove={handleRemove}
                onRemoveAll={handleRemoveAll}
              />
            </div>

            <div className="lg:col-span-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {technologies.map((tech) => (
                <TechCard
                  key={tech.id}
                  tech={tech}
                  isAdded={stack.some((item) => item.id === tech.id)}
                  onAdd={handleAdd}
                />
              ))}
            </div>
          </div>
        )}
      </section>

      <ToastContainer autoClose={2000} />
    </div>
  );
}

export default App;