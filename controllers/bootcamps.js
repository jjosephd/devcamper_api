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
const ErrorResponse = require('../utils/errorResponse');
//@desc         Get all bootcamps
//@route        GET /api/v1/bootcamps
//@access       Public

exports.getBootcamps = async (req, res, next) => {
  try {
    const bootcamps = await bootcamps.find();
    res.status(200).json({ success: true, data: bootcamps });
  } catch (err) {
    next(err);
  }
};

//@desc         Get single bootcamp
//@route        GET /api/v1/bootcamps/:id
//@access       Public

exports.getBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id);
    if (!bootcamp) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: bootcamp });
  } catch (err) {
    next(
      new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
    );
  }
};

//@desc         Create bootcamp entry
//@route        GET /api/v1/bootcamps/:id
//@access       Private
exports.createBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Create New Bootcamp Entry' });
};

//@desc         Update single bootcamps
//@route        PUT /api/v1/bootcamps/:id
//@access       Private
exports.updateBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Update ${req.params.id}` });
};

//@desc         Delete single bootcamps
//@route        DELETE /api/v1/bootcamps/:id
//@access       Private
exports.deleteBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Delete ${req.params.id}` });
};
