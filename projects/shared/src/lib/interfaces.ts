export interface MenuItem {
  text: string;
  link: string;
}

export interface Alert {
  type?: "primary" | "info" | "success" | "danger" | "warning";
  heading?: string;
  text: string;
  spinner?: boolean;
}
