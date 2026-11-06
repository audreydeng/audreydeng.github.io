import React from "react";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80",
    alt: "Sleeping dog curled up in a cozy spot",
    caption: "Deep in a warm, dream-filled nap."
  },
  {
    src: "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=900&q=80",
    alt: "Sleeping dog resting against a cushion",
    caption: "A peaceful little snooze on a soft cushion."
  },
  {
    src: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=900&q=80",
    alt: "Sleeping dog lying in grass",
    caption: "One ear flopped, one paw tucked in, fully asleep."
  },
  {
    src: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=900&q=80",
    alt: "Sleeping dog with tongue out",
    caption: "The sleepiest member of the household."
  },
  {
    src: "https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&w=900&q=80",
    alt: "Dog asleep on a bed",
    caption: "Asleep in the middle of a perfect afternoon."
  },
  {
    src: "https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=900&q=80",
    alt: "Dog sleeping on the floor",
    caption: "A simple, contented rest in the sun."
  },
  {
    src: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&w=900&q=80",
    alt: "Sleeping dog outdoors",
    caption: "A small, sleepy moment outside."
  },
  {
    src: "https://images.unsplash.com/photo-1591946614720-90a587da4a36?auto=format&fit=crop&w=900&q=80",
    alt: "Dog sleeping with its head down",
    caption: "Soft eyes, quiet breath, full rest."
  },
  {
    src: "https://images.unsplash.com/photo-1525253086316-d0c936c814f8?auto=format&fit=crop&w=900&q=80",
    alt: "Sleepy dog on a blanket",
    caption: "Blanket nest and a full night of dreams."
  },
  {
    src: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=900&q=80",
    alt: "Dog sleeping indoors",
    caption: "Peacefully asleep in a favorite spot."
  },
  {
    src: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80",
    alt: "Dog sleeping on a rug",
    caption: "Completely settled into a little nap."
  },
  {
    src: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=900&q=80",
    alt: "Sleepy dog in a cozy pose",
    caption: "The kind of sleep that looks deeply earned."
  },
  {
    src: "https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?auto=format&fit=crop&w=900&q=80",
    alt: "Dog asleep on a couch",
    caption: "A perfect nap with the whole couch to themselves."
  },
  {
    src: "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&w=900&q=80",
    alt: "Dog sleeping by the window",
    caption: "One sleepy dog, one quiet window light."
  },
  {
    src: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=900&q=80",
    alt: "Dog sleeping with paws tucked in",
    caption: "A tiny, contented snooze in a curled-up pose."
  },
  {
    src: "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?auto=format&fit=crop&w=900&q=80",
    alt: "Dog asleep on the grass",
    caption: "Slow breathing, soft ears, full rest."
  }
];

function Dog() {
  return (
    <section className="dog-page">
      <div className="dog-intro">
        <p className="label">My Dog</p>
        <h2>Sleeping in a dozen small heroic poses.</h2>
        <p>
          My dog is my favorite little philosopher, and their ideal occupation is
          clearly sleep. They are endlessly committed to comfort, excellent at
          finding the warmest patch of sunlight, and remarkably skilled at making
          rest look like an art form.
        </p>
        <p>
          This gallery is a tiny archive of their most impressive snoozes: curled up,
          tucked in, stretched out, and fully surrendered to dreams.
        </p>
      </div>

      <div className="dog-gallery">
        {photos.map((photo) => (
          <figure key={photo.src} className="dog-card">
            <img src={photo.src} alt={photo.alt} />
            <figcaption>{photo.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export default Dog;
