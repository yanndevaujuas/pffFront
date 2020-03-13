import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
  path: string;
  title: string;
  rtlTitle: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  /*{
    path: "/dashboard",
    title: "Dashboard",
    rtlTitle: "لوحة القيادة",
    icon: "icon-chart-pie-36",
    class: ""
  },
  {
    path: "/icons",
    title: "Icons",
    rtlTitle: "الرموز",
    icon: "icon-atom",
    class: ""
  },
  {
    path: "/maps",
    title: "Maps",
    rtlTitle: "خرائط",
    icon: "icon-pin",
    class: "" },
  {
    path: "/notifications",
    title: "Notifications",
    rtlTitle: "إخطارات",
    icon: "icon-bell-55",
    class: ""
  },*/

  {
    path: "/user",
    title: "Utilsateur",
    rtlTitle: "لوحة القيادة",
    icon: "icon-single-02",
    class: ""
  },
  {
    path: "/role",
    title: "Role",
    rtlTitle: "لوحة القيادة",
    icon: "icon-single-02",
    class: ""
  },
  {
    path: "/tache",
    title: "Tache",
    rtlTitle: "لوحة القيادة",
    icon: "icon-single-02",
    class: ""
  },
  {
    path: "/affaire",
    title: "Affaire",
    rtlTitle: "لوحة القيادة",
    icon: "icon-single-02",
    class: ""
  },
  {
    path: "/document",
    title: "Document",
    rtlTitle: "لوحة القيادة",
    icon: "icon-single-02",
    class: ""
  },
  {
    path: "/tribunal",
    title: "Tribunal",
    rtlTitle: "لوحة القيادة",
    icon: "icon-single-02",
    class: ""
  },
  {
    path: "/phase",
    title: "Phase",
    rtlTitle: "لوحة القيادة",
    icon: "icon-single-02",
    class: ""
  },
  {
    path: "/moral",
    title: "Moral",
    rtlTitle: "لوحة القيادة",
    icon: "icon-single-02",
    class: ""
  },
  {
    path: "/physique",
    title: "Physique",
    rtlTitle: "لوحة القيادة",
    icon: "icon-single-02",
    class: ""
  }
  /*,
  {
    path: "/tables",
    title: "Table List",
    rtlTitle: "قائمة الجدول",
    icon: "icon-puzzle-10",
    class: ""
  },
  {
    path: "/typography",
    title: "Typography",
    rtlTitle: "طباعة",
    icon: "icon-align-center",
    class: ""
  },
  {
    path: "/rtl",
    title: "RTL Support",
    rtlTitle: "ار تي ال",
    icon: "icon-world",
    class: ""
  }*/
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
