

//Component
import { setupAccountDropdown , setupDropDownBottomHeader } from '../../../component/Header/Header.js';
if (document.getElementById('account_wrapper')) {
  setupAccountDropdown();
}
if (document.getElementById('bot_header_dropdown_wrapper')) {
  setupDropDownBottomHeader();
}
