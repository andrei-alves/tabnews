/* eslint-disable import/namespace */
import * as document from './_document.jsx';
import * as ui from './index.js';
import * as markdown from './Markdown/index.js';

const exportedByIndex = [
  'ActionList',
  'ActionMenu',
  'AnchoredOverlay',
  'AutoThemeProvider',
  'Box',
  'BranchName',
  'Button',
  'Checkbox',
  'COLOR_MODE_COOKIE',
  'CounterLabel',
  'Dialog',
  'Flash',
  'FormControl',
  'GlobalStyle',
  'GoToTopButton',
  'Heading',
  'IconButton',
  'Label',
  'LabelGroup',
  'NavList',
  'NoFlashGlobalStyle',
  'Overlay',
  'PrimerRoot',
  'SegmentedControl',
  'Select',
  'Spinner',
  'StyledComponentsRegistry',
  'TabNav',
  'Text',
  'TextInput',
  'ThemeProvider',
  'Tooltip',
  'TooltipV1',
  'Truncate',
  'useConfirm',
  'useTheme',
];

const exportedBy_document = ['Document'];

const exportedByMarkdown = [
  'MarkdownEditor',
  'MarkdownViewer',
  'anchorHeadersPlugin',
  'copyCodeToClipboardPlugin',
  'externalLinksPlugin',
  'removeDuplicateClobberPrefix',
];

describe('ui', () => {
  describe('index', () => {
    it.each(exportedByIndex)('should export "%s"', (exported) => {
      expect(ui[exported]).toBeDefined();
    });
  });

  describe('_document', () => {
    it.each(exportedBy_document)('should export "%s"', (exported) => {
      expect(document[exported]).toBeDefined();
    });
  });

  describe('markdown', () => {
    it.each(exportedByMarkdown)('should export "%s"', (exported) => {
      expect(markdown[exported]).toBeDefined();
    });
  });
});
