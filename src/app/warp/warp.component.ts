import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy,
  AfterViewInit
} from "@angular/core";
import { BaseComponentComponent } from "../base-component/base-component.component";

interface iPeriod {
  time: number;
  name: string;
  plural: string;
  id: string;
}

@Component({
  selector: "app-warp",
  templateUrl: "./warp.component.html",
  styleUrls: ["./warp.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WarpComponent extends BaseComponentComponent
  implements OnInit, OnDestroy, AfterViewInit {
  periods: iPeriod[] = [
    {
      time: 60,
      name: "Minute",
      plural: "Minutes",
      id: "m"
    },
    {
      time: 3600,
      name: "Hour",
      plural: "Hours",
      id: "h"
    },
    {
      time: 3600 * 24,
      name: "Day",
      plural: "Days",
      id: "d"
    },
    {
      time: 3600 * 24 * 7,
      name: "Week",
      plural: "Weeks",
      id: "w"
    },
    {
      time: 3600 * 24 * 30,
      name: "Month",
      plural: "Month",
      id: "n"
    },
    {
      time: 3600 * 24 * 365,
      name: "Year",
      plural: "Years",
      id: "y"
    }
  ];

  buyOptions = [1, 2, 5, 10, 30];

  getPeriodId(index: number, period: iPeriod) {
    return period.id;
  }
  /**
   * Warp
   * @param time seconds
   */
  warp(time: number) {
    if (this.ms.game.darkMatter.lt(time)) return false;
    this.ms.game.darkMatter = this.ms.game.darkMatter.minus(time);
    this.ms.game.timeToWarp = this.ms.game.timeToWarp + time;
  }
  isEnabled() {}
}
