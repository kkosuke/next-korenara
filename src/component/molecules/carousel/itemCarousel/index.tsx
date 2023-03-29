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
};
type Item = {
  image: string;
  title: string;
  id: number;
  user: User;
};
type Props = {
  items: Item[];
};
export const ItemCarousel: React.FC<Props> = ({ items }) => {
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
        {items.map((item) => (
          <li
            key={item.id}
            className="keen-slider__slide mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow"
          >
            <Link href="#" className="block hover:opacity-70">
              <Image
                src={item.image}
                className="aspect-video w-full object-cover"
                alt=""
                width={200}
                height={160}
              />
              <div className="p-4 pt-3">
                <p className={`${styles.description} text-gray-500`}>
                  {item.title}
                </p>
                <div className="flex flex-wrap items-center gap-3 mt-3">
                  <div className="h-8 w-8">
                    <Image
                      className="h-full w-full rounded-full object-cover object-center ring ring-white"
                      src={item.user.image}
                      alt=""
                      width={32}
                      height={32}
                    />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-secondary-500">
                      {item.user.name}
                    </div>
                    <div className="text-xs text-secondary-400">
                      Joined in April 1976
                    </div>
                  </div>
                </div>
              </div>
            </Link>
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
        className={`w-12 h-12 ${styles.arrow} ${
          props.left ? styles.arrowLeft : styles.arrowRight
        } ${props.disabled && styles.arrowDisabled}`}
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
