import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-popover',
  template: `
    <div class="playground light" title="should render multiple popovers" style="height: 500px; width: 100%">
      <span style="position: absolute; top: 50vh; left: 50vw">
        <p-popover>
          <span
            >Some slotted and deeply nested <a href="#">linked</a>, <b>bold</b>, <strong>strong</strong>,
            <em>emphasized</em> and <i>italic</i> text</span
          >
        </p-popover>
      </span>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopoverComponent {}
