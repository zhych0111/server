<?php

declare(strict_types=1);
/**
 * @copyright Copyright (c) 2020 Robin Appelman <robin@icewind.nl>
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
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

namespace OC\Share20\Exception;

use OC\HintException;
use OCP\IL10N;

class AlreadyShared extends HintException {
	private $name;
	private $user;

	public function __construct(IL10N $l10n, string $name, string $user) {
		$this->name = $name;
		$this->user = $user;

		parent::__construct($l10n->t('Sharing %s failed, because this item is already shared with user %s', [$name, $user]));
	}
}
