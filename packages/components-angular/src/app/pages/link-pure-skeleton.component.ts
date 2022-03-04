/* Auto Generated File */
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { componentsReady } from '@porsche-design-system/components-angular';

@Component({
  selector: 'page-link-pure-skeleton',
  styles: [
    `
      p-link-pure:not(:last-child) {
        margin-right: 0.5rem;
      }
      .stretched-links p-link-pure {
        margin-right: 0;
      }
    `,
  ],
  template: `
    <div class="playground light" title="should render link pure skeleton with label">
      <p-link-pure [href]="'https://www.porsche.com'">Label default</p-link-pure>
    </div>
    <div class="playground dark" title="should render link pure skeleton with label on dark background">
      <p-link-pure [href]="'https://www.porsche.com'" [theme]="'dark'">Label default</p-link-pure>
    </div>

    <div class="playground light" title="should render link pure skeleton without label">
      <p-link-pure [href]="'https://www.porsche.com'" [hideLabel]="true">Some label</p-link-pure>
    </div>
    <div class="playground dark" title="should render link pure skeleton without label on dark background">
      <p-link-pure [href]="'https://www.porsche.com'" [hideLabel]="true" [theme]="'dark'">Some label</p-link-pure>
    </div>

    <div class="playground light" title="should render link pure skeleton with specific icon">
      <p-link-pure [href]="'https://www.porsche.com'" [icon]="'phone'">Label with specific icon</p-link-pure>
    </div>

    <div class="playground dark" title="should render link pure skeleton with specific icon on dark background">
      <p-link-pure [href]="'https://www.porsche.com'" [icon]="'phone'" [theme]="'dark'">Label with specific icon</p-link-pure>
    </div>

    <div class="playground light" title="should render link pure skeleton with multiline label">
      <p-link-pure [href]="'https://www.porsche.com'" style="width: 240px">
        Label multiline lorem ipsum dolor sit amet, consetetur sadipscing
      </p-link-pure>
    </div>

    <div class="playground light" title="should render link pure skeleton with no icon">
      <p-link-pure [href]="'https://www.porsche.com'" [icon]="'none'">Label icon none</p-link-pure>
    </div>

    <div class="playground light" title="should render link pure skeleton icon if hide-label and icon none is set">
      <p-link-pure [href]="'https://www.porsche.com'" [hideLabel]="true" [icon]="'none'">Label hide-label icon none</p-link-pure>
    </div>

    <div class="playground light stretched-links" title="should render link pure skeleton with stretched label">
      <p-link-pure [href]="'https://www.porsche.com'" [stretch]="true">Label stretch</p-link-pure>
    </div>

    <div class="playground light stretched-links" title="should render with stretched label depending on viewport">
      <p-link-pure
        [href]="'https://www.porsche.com'"
        [stretch]="{ base: true, xs: false, s: true, m: false, l: true, xl: false }"
      >
        Label stretch responsive
      </p-link-pure>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinkPureSkeletonComponent implements OnInit {
  ngOnInit() {
    componentsReady().then(() => {
      document.querySelectorAll('p-link-pure').forEach((link) => {
        link.classList.remove('hydrated');
      });
    });
  }
}
