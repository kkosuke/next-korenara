import React, { useState } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react"; // import from 'keen-slider/react.es' for to get an ES module
import styles from "./index.module.css";
import Image from "next/image";
import Link from "next/link";

type Item = {
  name: string;
  id: number;
  image: string;
};
type Props = {
  items: Item[];
};

export const CategoryCarousel: React.FC<Props> = ({ items }) => {
  const [loaded, setLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLUListElement>({
    loop: false,
    mode: "free-snap",
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 1.5, spacing: 30 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 4, spacing: 10 },
      },
    },
    slides: { perView: 1 },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <div className={styles.wrap}>
      <ul ref={sliderRef} className="keen-slider pb-2">
        {items.map((item) => (
          <li
            className="keen-slider__slide overflow-visible rounded-md shadow mx-auto max-w-md bg-white"
            key={item.id}
          >
            <Link
              href={`category/${item.id}`}
              className="flex items-center gap-3 p-3 hover:opacity-70"
            >
              <div className="h-12 w-12">
                <Image
                  className="h-full w-full rounded-xl object-cover object-center ring ring-white"
                  src={item.image}
                  alt=""
                  width={48}
                  height={48}
                />
              </div>
              <div>
                <div className="font-medium text-gray-500">{item.name}</div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      {loaded && instanceRef.current && (
        <>
          {currentSlide !== 0 && (
            <Arrow
              left
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
            />
          )}
          {/* @ts-ignore */
          currentSlide + instanceRef.current.options.slides?.perView <
            instanceRef.current.track.details.slides.length && (
            <Arrow
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
            />
          )}
        </>
      )}
    </div>
  );
};

function Arrow(props: {
  disabled?: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={`w-12 h-12 p-3 absolute rounded-full drop-shadow-md cursor-pointer hover:bg-zinc-200 bg-white ${
          styles.arrow
        } ${props.left ? styles.arrowLeft : styles.arrowRight} ${
          props.disabled && styles.arrowDisabled
        }`}
        onClick={props.onClick}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d={
            props.left
              ? "M15.75 19.5L8.25 12l7.5-7.5"
              : "M8.25 4.5l7.5 7.5-7.5 7.5"
          }
        />
      </svg>
    </>
  );
}
