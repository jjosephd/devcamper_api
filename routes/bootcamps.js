// Copyright 2024 Jordan Daniel
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

const express = require('express');
const router = express.Router();
//Route Files
router.get('/', (req, res) =>
  res.status(200).json({ success: true, msg: 'Show All Bootcamps' })
);
router.get('/:id', (req, res) =>
  res.status(200).json({ success: true, msg: `Access ${req.params.id}` })
);
router.post('/', (req, res) =>
  res.status(200).json({ success: true, msg: 'Create New Bootcamp Entry' })
);
router.put('/:id', (req, res) =>
  res.status(200).json({ success: true, msg: `Update ${req.params.id}` })
);
router.delete('/:id', (req, res) =>
  res.status(200).json({ success: true, msg: `Delete ${req.params.id}` })
);

module.exports = router;
