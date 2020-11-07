!function(){function e(e,n,t,o,r,i,a){try{var c=e[i](a),u=c.value}catch(e){return void t(e)}c.done?n(u):Promise.resolve(u).then(o,r)}
/**
 * @copyright Copyright (c) 2020 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
var n=null,o=new OCA.Files.Sidebar.Tab({id:"comments",name:t("comments","Comments"),icon:"icon-comment",mount:function(t,o,r){return(i=regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n&&n.$destroy(),n=new OCA.Comments.View("files",{parent:r}),e.next=4,n.update(o.id);case 4:n.$mount(t);case 5:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(o,r){var a=i.apply(n,t);function c(n){e(a,o,r,c,u,"next",n)}function u(n){e(a,o,r,c,u,"throw",n)}c(void 0)}))})();var i},update:function(e){n.update(e.id)},destroy:function(){n.$destroy(),n=null},scrollBottomReached:function(){n.onScrollBottomReached()}});window.addEventListener("DOMContentLoaded",(function(){OCA.Files&&OCA.Files.Sidebar&&OCA.Files.Sidebar.registerTab(o)}))}();
//# sourceMappingURL=comments-tab.js.map