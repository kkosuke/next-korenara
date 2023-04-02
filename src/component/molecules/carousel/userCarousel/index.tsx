import React, { useState } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react"; // import from 'keen-slider/react.es' for to get an ES module
import styles from "./index.module.css";
import Image from "next/image";
import Link from "next/link";

type User = {
  id: number;
  name: string;
  image: string;
  appeal: string;
  tags: string[];
};
type Props = {
  items: User[];
};

export const UserCarousel: React.FC<Props> = ({ items }) => {
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
        slides: { perView: 5.5, spacing: 10 },
      },
    },
    slides: { perView: 3 },
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
        {items.map((user) => (
          <li
            key={user.id}
            className="keen-slider__slide mx-auto max-w-md overflow-hidden rounded-sm bg-white shadow"
          >
            <Link href="#" className="py-3 px-4 block hover:opacity-70">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10">
                  <Image
                    className="h-full w-full rounded-full object-cover object-center ring ring-white"
                    src={user.image}
                    alt=""
                    width={30}
                    height={30}
                  />
                  <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
                </div>
                <div className="text-sm">
                  <div className="font-medium text-gray-700">{user.name}</div>
                  <div className="text-gray-400">{user.appeal}</div>
                </div>
              </div>
            </Link>
            <div className="px-4 pb-2">
              <div className="flex gap-2 whitespace-nowrap truncate">
                {user.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
      {loaded && instanceRef.current && (
        <>
          <Arrow
            left
            onClick={(e: any) =>
              e.stopPropagation() || instanceRef.current?.prev()
            }
            disabled={currentSlide === 0}
          />

          <Arrow
            onClick={(e: any) =>
              e.stopPropagation() || instanceRef.current?.next()
            }
            disabled={(() => {
              return (
                currentSlide ===
                  instanceRef.current.track.details.slides.length - 1 ||
                /* @ts-ignore */
                currentSlide + instanceRef.current.options.slides?.perView >=
                  instanceRef.current.track.details.slides.length
              );
            })()}
          />
        </>
      )}
    </div>
  );
};

function Arrow(props: {
  disabled: boolean;
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
