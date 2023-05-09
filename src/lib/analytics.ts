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
  eventLabel: string;
};

type Ga4TrackPageView = {
  event: "ga4TrackPageView";
  masqueradeLocation: string;
  masqueradePageTitle: string;
};

type Ga4MasqueradeLocation = {
  masqueradeLocation: string;
};

export type DataLayerType =
  | PageViewEvent
  | InViewEvent
  | ClickEvent
  | Ga4Event
  | Ga4TrackPageView
  | Ga4MasqueradeLocation;

export const pushDataLayer = (data: DataLayerType): void => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(data);
};
