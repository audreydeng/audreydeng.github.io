import React from "react";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80",
    alt: "Dog sitting outside in sunlight",
    caption: "A happy afternoon nap and a very pleased expression."
  },
  {
    src: "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=900&q=80",
    alt: "Dog looking up at the camera",
    caption: "Always ready for a walk, a snack, or a little attention."
  },
  {
    src: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=900&q=80",
    alt: "Dog in a field",
    caption: "Exploring the world one sniff at a time."
  },
  {
    src: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=900&q=80",
    alt: "Dog smiling with a tongue out",
    caption: "The unofficial morale officer of the household."
  }
];

function Dog() {
  return (
    <section className="dog-page">
      <div className="dog-intro">
        <p className="label">My Dog</p>
        <h2>Meet my favorite coworker.</h2>
        <p>
          My dog is my constant companion, my reason to take a slow walk, and my
          most enthusiastic audience for every little thing in life. Whether it is a
          morning stroll, a sunny patch of grass, or a good nap in the afternoon,
          they bring a sense of calm and joy to every day.
        </p>
        <p>
          They are equal parts curious explorer and couch potato—always ready to
          investigate the world, and always ready to curl up beside me when the day
          is done.
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
