import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { AppService } from "src/app/app.service";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.css"],
})
export class WelcomeComponent implements OnInit, OnDestroy {
  fullname$ = this.service.loggedInUserFullname$;
  fullname = "";
  subscription: Subscription | undefined;
  constructor(private service: AppService) {}

  ngOnInit(): void {
    this.subscription = this.fullname$.subscribe((fullname) => {
      this.fullname = fullname;
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe;
  }
}
