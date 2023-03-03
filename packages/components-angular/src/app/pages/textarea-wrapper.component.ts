/* Auto Generated File */
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'page-textarea-wrapper',
  styles: [
    `
      @media only screen and (min-width: 760px) {
        #app,
        :host {
          display: grid;
          grid-template-columns: repeat(2, 50%);
        }
      }
    `,
  ],
  template: `
    <div class="playground light" title="should render with label">
      <p-textarea-wrapper [label]="'Label'">
        <textarea></textarea>
      </p-textarea-wrapper>
    </div>
    <div class="playground dark" title="should render with label on dark theme">
      <p-textarea-wrapper [label]="'Label'" [theme]="'dark'">
        <textarea></textarea>
      </p-textarea-wrapper>
    </div>

    <div class="playground light" title="should render with label and placeholder">
      <p-textarea-wrapper [label]="'Label with placeholder'">
        <textarea [placeholder]="'Some placeholder'"></textarea>
      </p-textarea-wrapper>
    </div>
    <div class="playground dark" title="should render with label and placeholder on dark theme">
      <p-textarea-wrapper [label]="'Label with placeholder'" [theme]="'dark'">
        <textarea [placeholder]="'Some placeholder'"></textarea>
      </p-textarea-wrapper>
    </div>

    <div class="playground light" title="should render with label, description and placeholder">
      <p-textarea-wrapper [label]="'Label with description and placeholder'" [description]="'Some description'">
        <textarea [placeholder]="'Some placeholder'"></textarea>
      </p-textarea-wrapper>
    </div>
    <div class="playground dark" title="should render with label, description and placeholder on dark theme">
      <p-textarea-wrapper [label]="'Label with description and placeholder'" [description]="'Some description'" [theme]="'dark'">
        <textarea [placeholder]="'Some placeholder'"></textarea>
      </p-textarea-wrapper>
    </div>

    <div class="playground light" title="should render without label and without description">
      <p-textarea-wrapper [label]="'Label'" [description]="'Some description'" [hideLabel]="true">
        <textarea>Without label and description</textarea>
      </p-textarea-wrapper>
    </div>
    <div class="playground dark" title="should render without label and without description on dark theme">
      <p-textarea-wrapper [label]="'Label'" [description]="'Some description'" [hideLabel]="true" [theme]="'dark'">
        <textarea>Without label and description</textarea>
      </p-textarea-wrapper>
    </div>

    <div class="playground light" title="should render with responsive label and description">
      <p-textarea-wrapper
        [label]="'Label'"
        [description]="'Some description'"
        [hideLabel]="{ base: true, xs: false, s: true, m: false, l: true, xl: false }"
      >
        <textarea>Responsive label and description</textarea>
      </p-textarea-wrapper>
    </div>
    <div class="playground dark" title="should render with responsive label and description on dark theme">
      <p-textarea-wrapper
        [label]="'Label'"
        [description]="'Some description'"
        [hideLabel]="{ base: true, xs: false, s: true, m: false, l: true, xl: false }"
        [theme]="'dark'"
      >
        <textarea>Responsive label and description</textarea>
      </p-textarea-wrapper>
    </div>

    <div class="playground light" title="should render in required state">
      <p-textarea-wrapper [label]="'Required'">
        <textarea required></textarea>
      </p-textarea-wrapper>
      <p-textarea-wrapper [label]="'Required and insanely super long label across multiple lines'">
        <textarea required></textarea>
      </p-textarea-wrapper>
    </div>
    <div class="playground dark" title="should render in required state on dark theme">
      <p-textarea-wrapper [label]="'Required'" [theme]="'dark'">
        <textarea required></textarea>
      </p-textarea-wrapper>
      <p-textarea-wrapper [label]="'Required and insanely super long label across multiple lines'" [theme]="'dark'">
        <textarea required></textarea>
      </p-textarea-wrapper>
    </div>

    <div class="playground light" title="should render in disabled state">
      <p-textarea-wrapper [label]="'Disabled'" [description]="'Some description'">
        <textarea disabled></textarea>
      </p-textarea-wrapper>
    </div>
    <div class="playground dark" title="should render in disabled state on dark theme">
      <p-textarea-wrapper [label]="'Disabled'" [description]="'Some description'" [theme]="'dark'">
        <textarea disabled></textarea>
      </p-textarea-wrapper>
    </div>

    <div class="playground light" title="should render with placeholder in disabled state">
      <p-textarea-wrapper [label]="'Disabled placeholder'">
        <textarea disabled [placeholder]="'Some placeholder'"></textarea>
      </p-textarea-wrapper>
    </div>
    <div class="playground dark" title="should render with placeholder in disabled state on dark theme">
      <p-textarea-wrapper [label]="'Disabled placeholder'" [theme]="'dark'">
        <textarea disabled [placeholder]="'Some placeholder'"></textarea>
      </p-textarea-wrapper>
    </div>

    <div class="playground light" title="should render in readonly state">
      <p-textarea-wrapper [label]="'Readonly'">
        <textarea readonly>Some value</textarea>
      </p-textarea-wrapper>
    </div>
    <div class="playground dark" title="should render in readonly state on dark theme">
      <p-textarea-wrapper [label]="'Readonly'" [theme]="'dark'">
        <textarea readonly>Some value</textarea>
      </p-textarea-wrapper>
    </div>

    <div class="playground light" title="should render with counter">
      <p-textarea-wrapper [label]="'Counter'">
        <textarea [maxLength]="200">Some value</textarea>
      </p-textarea-wrapper>
    </div>
    <div class="playground dark" title="should render with counter on dark theme">
      <p-textarea-wrapper [label]="'Counter'" [theme]="'dark'">
        <textarea [maxLength]="200">Some value</textarea>
      </p-textarea-wrapper>
    </div>

    <div class="playground light" title="should render without counter">
      <p-textarea-wrapper [label]="'Counter hidden'" [showCharacterCount]="false">
        <textarea [maxLength]="200">Some value</textarea>
      </p-textarea-wrapper>
    </div>
    <div class="playground dark" title="should render without counter on dark theme">
      <p-textarea-wrapper [label]="'Counter hidden'" [showCharacterCount]="false" [theme]="'dark'">
        <textarea [maxLength]="200">Some value</textarea>
      </p-textarea-wrapper>
    </div>

    <div class="playground light" title="should render with error state and error message">
      <p-textarea-wrapper [label]="'Error with message'" [state]="'error'" [message]="'Error message'">
        <textarea>Some value</textarea>
      </p-textarea-wrapper>
    </div>
    <div class="playground dark" title="should render with error state and error message on dark theme">
      <p-textarea-wrapper [label]="'Error with message'" [state]="'error'" [message]="'Error message'" [theme]="'dark'">
        <textarea>Some value</textarea>
      </p-textarea-wrapper>
    </div>

    <div class="playground light" title="should render with error state and no error message">
      <p-textarea-wrapper [label]="'Error without message'" [state]="'error'">
        <textarea>Some value</textarea>
      </p-textarea-wrapper>
    </div>
    <div class="playground dark" title="should render with error state and no error message on dark theme">
      <p-textarea-wrapper [label]="'Error without message'" [state]="'error'" [theme]="'dark'">
        <textarea>Some value</textarea>
      </p-textarea-wrapper>
    </div>

    <div class="playground light" title="should render with success state and success message">
      <p-textarea-wrapper [label]="'Success with message'" [state]="'success'" [message]="'Success message'">
        <textarea>Some value</textarea>
      </p-textarea-wrapper>
    </div>
    <div class="playground dark" title="should render with success state and success message on dark theme">
      <p-textarea-wrapper [label]="'Success with message'" [state]="'success'" [message]="'Success message'" [theme]="'dark'">
        <textarea>Some value</textarea>
      </p-textarea-wrapper>
    </div>

    <div class="playground light" title="should render with success state and no success message">
      <p-textarea-wrapper [label]="'Success without message'" [state]="'success'">
        <textarea>Some value</textarea>
      </p-textarea-wrapper>
    </div>
    <div class="playground dark" title="should render with success state and no success message on dark theme">
      <p-textarea-wrapper [label]="'Success without message'" [state]="'success'" [theme]="'dark'">
        <textarea>Some value</textarea>
      </p-textarea-wrapper>
    </div>

    <div class="playground light" title="should render with default state and no message">
      <p-textarea-wrapper [label]="'Default without message'" [state]="'none'" [message]="'this message should be hidden'">
        <textarea>Some value</textarea>
      </p-textarea-wrapper>
    </div>
    <div class="playground dark" title="should render with default state and no message on dark theme">
      <p-textarea-wrapper [label]="'Default without message'" [state]="'none'" [message]="'this message should be hidden'" [theme]="'dark'">
        <textarea>Some value</textarea>
      </p-textarea-wrapper>
    </div>

    <div class="playground light" title="should render label, description and message by slotted content with error state">
      <p-textarea-wrapper [state]="'error'">
        <span slot="label">
          Slotted label
          <span>
            And some slotted and deeply nested <a [href]="'#'">anchor</a>, <b>bold</b>, <strong>strong</strong>,
            <em>emphasized</em> and <i>italic</i> text.
          </span>
        </span>
        <span slot="description">
          Slotted description.
          <span>
            And some slotted and deeply nested <a [href]="'#'">anchor</a>, <b>bold</b>, <strong>strong</strong>,
            <em>emphasized</em> and <i>italic</i> text.
          </span>
        </span>
        <textarea>Some value</textarea>
        <span slot="message">
          Slotted error message.
          <span>
            And some slotted and deeply nested <a [href]="'#'">anchor</a>, <b>bold</b>, <strong>strong</strong>,
            <em>emphasized</em> and <i>italic</i> text.
          </span>
        </span>
      </p-textarea-wrapper>
    </div>
    <div
      class="playground dark"
      title="should render label, description and message by slotted content with error state on dark theme"
    >
      <p-textarea-wrapper [state]="'error'" [theme]="'dark'">
        <span slot="label">
          Slotted label
          <span>
            And some slotted and deeply nested <a [href]="'#'">anchor</a>, <b>bold</b>, <strong>strong</strong>,
            <em>emphasized</em> and <i>italic</i> text.
          </span>
        </span>
        <span slot="description">
          Slotted description.
          <span>
            And some slotted and deeply nested <a [href]="'#'">anchor</a>, <b>bold</b>, <strong>strong</strong>,
            <em>emphasized</em> and <i>italic</i> text.
          </span>
        </span>
        <textarea>Some value</textarea>
        <span slot="message">
          Slotted error message.
          <span>
            And some slotted and deeply nested <a [href]="'#'">anchor</a>, <b>bold</b>, <strong>strong</strong>,
            <em>emphasized</em> and <i>italic</i> text.
          </span>
        </span>
      </p-textarea-wrapper>
    </div>

    <div
      class="playground light"
      title="should render label, description and message by slotted content with success state"
    >
      <p-textarea-wrapper [state]="'success'">
        <span slot="label">
          Slotted label
          <span>
            And some slotted and deeply nested <a [href]="'#'">anchor</a>, <b>bold</b>, <strong>strong</strong>,
            <em>emphasized</em> and <i>italic</i> text.
          </span>
        </span>
        <span slot="description">
          Slotted description.
          <span>
            And some slotted and deeply nested <a [href]="'#'">anchor</a>, <b>bold</b>, <strong>strong</strong>,
            <em>emphasized</em> and <i>italic</i> text.
          </span>
        </span>
        <textarea>Some value</textarea>
        <span slot="message">
          Slotted success message.
          <span>
            And some slotted and deeply nested <a [href]="'#'">anchor</a>, <b>bold</b>, <strong>strong</strong>,
            <em>emphasized</em> and <i>italic</i> text.
          </span>
        </span>
      </p-textarea-wrapper>
    </div>
    <div
      class="playground dark"
      title="should render label, description and message by slotted content with success state on dark theme"
    >
      <p-textarea-wrapper [state]="'success'" [theme]="'dark'">
        <span slot="label">
          Slotted label
          <span>
            And some slotted and deeply nested <a [href]="'#'">anchor</a>, <b>bold</b>, <strong>strong</strong>,
            <em>emphasized</em> and <i>italic</i> text.
          </span>
        </span>
        <span slot="description">
          Slotted description.
          <span>
            And some slotted and deeply nested <a [href]="'#'">anchor</a>, <b>bold</b>, <strong>strong</strong>,
            <em>emphasized</em> and <i>italic</i> text.
          </span>
        </span>
        <textarea>Some value</textarea>
        <span slot="message">
          Slotted success message.
          <span>
            And some slotted and deeply nested <a [href]="'#'">anchor</a>, <b>bold</b>, <strong>strong</strong>,
            <em>emphasized</em> and <i>italic</i> text.
          </span>
        </span>
      </p-textarea-wrapper>
    </div>

    <div class="playground light" title="should render with multiline label, description, message and text">
      <p-textarea-wrapper
        [label]="'Multiline label lorem ipsum dolor sit amet, consetetur sadipscing'"
        [description]="'Multiline description lorem ipsum dolor sit amet, consetetur sadipscing lorem ipsum dolor sit amet'"
        [state]="'error'"
        [message]="'Multiline message at vero eos et accusam et justo duo dolores et ea rebum.'"
        style="max-width: 15rem"
      >
        <textarea>
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet,
        </textarea>
      </p-textarea-wrapper>
    </div>
    <div class="playground dark" title="should render with multiline label, description, message and text on dark theme">
      <p-textarea-wrapper
        [label]="'Multiline label lorem ipsum dolor sit amet, consetetur sadipscing'"
        [description]="'Multiline description lorem ipsum dolor sit amet, consetetur sadipscing lorem ipsum dolor sit amet'"
        [state]="'error'"
        [message]="'Multiline message at vero eos et accusam et justo duo dolores et ea rebum.'"
        style="max-width: 15rem"
        [theme]="'dark'"
      >
        <textarea>
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet,
        </textarea>
      </p-textarea-wrapper>
    </div>

    <div class="playground light" title="should render with label and multiline text">
      <p-textarea-wrapper [label]="'Multiline text'">
        <textarea>
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet,
        </textarea>
      </p-textarea-wrapper>
    </div>
    <div class="playground dark" title="should render with label and multiline text on dark theme">
      <p-textarea-wrapper [label]="'Multiline text'" [theme]="'dark'">
        <textarea>
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet,
        </textarea>
      </p-textarea-wrapper>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextareaWrapperComponent {}
