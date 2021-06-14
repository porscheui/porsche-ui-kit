import { ChangeDetectionStrategy, Component } from '@angular/core';
import { data, head } from '@porsche-design-system/shared';
import { TableHeadItem } from '@porsche-design-system/components-angular/lib/types';

@Component({
  selector: 'page-table',
  template: `
    <div class="playground light table" title="should render table">
      <p-table (sortingChange)="onSortingChange($event)">
        <p-table-head>
          <p-table-row>
            <p-table-head-cell *ngFor="let item of head" [item]="item">{{ item.name }}</p-table-head-cell>
          </p-table-row>
        </p-table-head>
        <p-table-body>
          <p-table-row *ngFor="let item of data">
            <p-table-cell>
              <p-flex>
                <p-flex-item>
                  <img src="{{ item.imageUrl }}" width="80" style="margin-right: 8px" alt="" />
                </p-flex-item>
                <p-flex-item>
                  <p-text weight="semibold">{{ item.model }}</p-text>
                  <p-text size="x-small">{{ item.date }}</p-text>
                </p-flex-item>
              </p-flex>
            </p-table-cell>
            <p-table-cell>{{ item.interest }}</p-table-cell>
            <p-table-cell>{{ item.vin }}</p-table-cell>
            <p-table-cell>{{ item.purchaseIntention }}</p-table-cell>
            <p-table-cell>{{ item.status }}</p-table-cell>
            <p-table-cell>{{ item.leadId }}</p-table-cell>
            <p-table-cell>
              <p-button-pure icon="edit">
                <span style="white-space: nowrap">Edit Lead</span>
              </p-button-pure>
            </p-table-cell>
            <p-table-cell>
              <p-button variant="tertiary" icon="refresh">
                <span style="white-space: nowrap">Overwrite</span>
              </p-button>
            </p-table-cell>
          </p-table-row>
        </p-table-body>
      </p-table>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {
  public head = head;
  public data = data;

  onSortingChange(e: CustomEvent<TableHeadItem>): void {
    const { key, direction } = e.detail;
    this.head = this.head.map((x) => ({ ...x, isSorting: false, ...(x.key === key && e.detail) }));
    this.data = [...this.data].sort((a, b) =>
      direction === 'asc' ? a[key].localeCompare(b[key]) : b[key].localeCompare(a[key])
    );
  }
}
