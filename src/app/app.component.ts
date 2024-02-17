import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { defaultValueCtx, Editor, rootCtx } from '@milkdown/core';
import { commonmark } from '@milkdown/preset-commonmark';
import { nord } from '@milkdown/theme-nord';
import { prism } from '@milkdown/plugin-prism';
import '@milkdown/theme-nord/style.css';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  // eslint-disable-next-line
  // @ts-ignore
  @ViewChild('editorRef') editorRef: ElementRef;

  defaultValue = '# Milkdown x Angular';

  ngAfterViewInit() {
    Editor.make()
      .config((ctx) => {
        ctx.set(rootCtx, this.editorRef.nativeElement);
        ctx.set(defaultValueCtx, this.defaultValue);
      })
      .use(prism)
      .config(nord)
      .use(commonmark)
      .create();
  }
}
