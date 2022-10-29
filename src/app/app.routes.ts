import { Routes } from "@angular/router";

export const AppRotas: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: "login",
    loadChildren: () => import("./pages/login/login.module").then(modules => modules.LoginModule)
  }
]
