type PageViewEvent = {
  event: "page_view";
  pagePath: string;
};

type InViewEvent = {
  event: "inView";
  label: string;
};

type ClickEvent = {
  event: "click";
  label: string;
};

type Ga4Event = {
  event: "ga4Event";
  eventCategory: string;
  eventAction: string;
  eventLabel?: string;
  eventValue?: string | number;
};

type Ga4TrackPageView = {
  event: "ga4TrackPageView";
  masqueradeLocation: string;
};

export type DataLayerType =
  | PageViewEvent
  | InViewEvent
  | ClickEvent
  | Ga4Event
  | Ga4TrackPageView;

export const pushDataLayer = (data: DataLayerType): void => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(data);
};
