/* Auto Generated File */
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'page-stepper-horizontal',
  styles: [
    `
      .reset-children > :before {
        width: 2rem;
        height: 2rem;
        margin: 2rem;
        border-radius: unset;
        border: none;
      }
    `,
  ],
  template: `
    <div class="playground light" title="should render all numbers from 1 to 9 on light background">
      <p-stepper-horizontal>
        <p-stepper-horizontal-item>Step 1</p-stepper-horizontal-item>
        <p-stepper-horizontal-item>Step 2</p-stepper-horizontal-item>
        <p-stepper-horizontal-item>Step 3</p-stepper-horizontal-item>
        <p-stepper-horizontal-item>Step 4</p-stepper-horizontal-item>
        <p-stepper-horizontal-item>Step 5</p-stepper-horizontal-item>
        <p-stepper-horizontal-item>Step 6</p-stepper-horizontal-item>
        <p-stepper-horizontal-item>Step 7</p-stepper-horizontal-item>
        <p-stepper-horizontal-item>Step 8</p-stepper-horizontal-item>
        <p-stepper-horizontal-item>Step 9</p-stepper-horizontal-item>
      </p-stepper-horizontal>
    </div>

    <div class="playground dark" title="should render all numbers from 1 to 9 on dark background">
      <p-stepper-horizontal [theme]="'dark'">
        <p-stepper-horizontal-item>Step 1</p-stepper-horizontal-item>
        <p-stepper-horizontal-item>Step 2</p-stepper-horizontal-item>
        <p-stepper-horizontal-item>Step 3</p-stepper-horizontal-item>
        <p-stepper-horizontal-item>Step 4</p-stepper-horizontal-item>
        <p-stepper-horizontal-item>Step 5</p-stepper-horizontal-item>
        <p-stepper-horizontal-item>Step 6</p-stepper-horizontal-item>
        <p-stepper-horizontal-item>Step 7</p-stepper-horizontal-item>
        <p-stepper-horizontal-item>Step 8</p-stepper-horizontal-item>
        <p-stepper-horizontal-item>Step 9</p-stepper-horizontal-item>
      </p-stepper-horizontal>
    </div>

    <div class="playground light" title="should render stepper on light background">
      <p-stepper-horizontal>
        <p-stepper-horizontal-item [state]="'current'">Step Current</p-stepper-horizontal-item>
        <p-stepper-horizontal-item [state]="'warning'">Step Warning</p-stepper-horizontal-item>
        <p-stepper-horizontal-item [state]="'complete'">Step Complete</p-stepper-horizontal-item>
        <p-stepper-horizontal-item [state]="'warning'" [disabled]="true">Step Warning Disabled</p-stepper-horizontal-item>
        <p-stepper-horizontal-item [state]="'complete'" [disabled]="true">Step Complete Disabled</p-stepper-horizontal-item>
        <p-stepper-horizontal-item>Step</p-stepper-horizontal-item>
      </p-stepper-horizontal>
    </div>

    <div class="playground dark" title="should render stepper on dark background">
      <p-stepper-horizontal [theme]="'dark'">
        <p-stepper-horizontal-item [state]="'current'">Step Current</p-stepper-horizontal-item>
        <p-stepper-horizontal-item [state]="'warning'">Step Warning</p-stepper-horizontal-item>
        <p-stepper-horizontal-item [state]="'complete'">Step Complete</p-stepper-horizontal-item>
        <p-stepper-horizontal-item [state]="'warning'" [disabled]="true">Step Warning Disabled </p-stepper-horizontal-item>
        <p-stepper-horizontal-item [state]="'complete'" [disabled]="true">Step Complete Disabled </p-stepper-horizontal-item>
        <p-stepper-horizontal-item>Step</p-stepper-horizontal-item>
      </p-stepper-horizontal>
    </div>

    <div class="playground light" title="should render arrow left on smaller viewports on light background">
      <p-stepper-horizontal>
        <p-stepper-horizontal-item [state]="'complete'">Step 1</p-stepper-horizontal-item>
        <p-stepper-horizontal-item [state]="'complete'">Step 2</p-stepper-horizontal-item>
        <p-stepper-horizontal-item [state]="'complete'">Step 3</p-stepper-horizontal-item>
        <p-stepper-horizontal-item [state]="'complete'">Step 4</p-stepper-horizontal-item>
        <p-stepper-horizontal-item [state]="'complete'">Step 5</p-stepper-horizontal-item>
        <p-stepper-horizontal-item [state]="'complete'">Step 6</p-stepper-horizontal-item>
        <p-stepper-horizontal-item [state]="'complete'">Step 7</p-stepper-horizontal-item>
        <p-stepper-horizontal-item [state]="'complete'">Step 8</p-stepper-horizontal-item>
        <p-stepper-horizontal-item [state]="'current'">Step Current</p-stepper-horizontal-item>
      </p-stepper-horizontal>
    </div>

    <div class="playground dark" title="should render arrow left on smaller viewports on dark background">
      <p-stepper-horizontal [theme]="'dark'">
        <p-stepper-horizontal-item [state]="'complete'">Step 1</p-stepper-horizontal-item>
        <p-stepper-horizontal-item [state]="'complete'">Step 2</p-stepper-horizontal-item>
        <p-stepper-horizontal-item [state]="'complete'">Step 3</p-stepper-horizontal-item>
        <p-stepper-horizontal-item [state]="'complete'">Step 4</p-stepper-horizontal-item>
        <p-stepper-horizontal-item [state]="'complete'">Step 5</p-stepper-horizontal-item>
        <p-stepper-horizontal-item [state]="'complete'">Step 6</p-stepper-horizontal-item>
        <p-stepper-horizontal-item [state]="'complete'">Step 7</p-stepper-horizontal-item>
        <p-stepper-horizontal-item [state]="'complete'">Step 8</p-stepper-horizontal-item>
        <p-stepper-horizontal-item [state]="'current'">Step Current</p-stepper-horizontal-item>
      </p-stepper-horizontal>
    </div>

    <div class="playground light" title="should render arrow left and right on smaller viewports on light background">
      <p-stepper-horizontal>
        <p-stepper-horizontal-item [state]="'complete'">Step 1</p-stepper-horizontal-item>
        <p-stepper-horizontal-item [state]="'complete'">Step 2</p-stepper-horizontal-item>
        <p-stepper-horizontal-item [state]="'complete'">Step 3</p-stepper-horizontal-item>
        <p-stepper-horizontal-item [state]="'complete'">Step 4</p-stepper-horizontal-item>
        <p-stepper-horizontal-item [state]="'current'">Step Current</p-stepper-horizontal-item>
        <p-stepper-horizontal-item>Step 6</p-stepper-horizontal-item>
        <p-stepper-horizontal-item>Step 7</p-stepper-horizontal-item>
        <p-stepper-horizontal-item>Step 8</p-stepper-horizontal-item>
        <p-stepper-horizontal-item>Step 9</p-stepper-horizontal-item>
      </p-stepper-horizontal>
    </div>

    <div class="playground dark" title="should render arrow left and right on smaller viewports on dark background">
      <p-stepper-horizontal [theme]="'dark'">
        <p-stepper-horizontal-item [state]="'complete'">Step 1</p-stepper-horizontal-item>
        <p-stepper-horizontal-item [state]="'complete'">Step 2</p-stepper-horizontal-item>
        <p-stepper-horizontal-item [state]="'complete'">Step 3</p-stepper-horizontal-item>
        <p-stepper-horizontal-item [state]="'complete'">Step 4</p-stepper-horizontal-item>
        <p-stepper-horizontal-item [state]="'current'">Step Current</p-stepper-horizontal-item>
        <p-stepper-horizontal-item>Step 6</p-stepper-horizontal-item>
        <p-stepper-horizontal-item>Step 7</p-stepper-horizontal-item>
        <p-stepper-horizontal-item>Step 8</p-stepper-horizontal-item>
        <p-stepper-horizontal-item>Step 9</p-stepper-horizontal-item>
      </p-stepper-horizontal>
    </div>

    <div class="playground light" title="should render correct styles when overrides are set">
      <p-stepper-horizontal class="reset-children">
        <p-stepper-horizontal-item [state]="'complete'">Step 1</p-stepper-horizontal-item>
        <p-stepper-horizontal-item [state]="'warning'">Step 2</p-stepper-horizontal-item>
        <p-stepper-horizontal-item [state]="'current'">Step 3</p-stepper-horizontal-item>
        <p-stepper-horizontal-item>Step 4</p-stepper-horizontal-item>
      </p-stepper-horizontal>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepperHorizontalComponent {}
