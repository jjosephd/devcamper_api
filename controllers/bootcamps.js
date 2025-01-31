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

const Bootcamp = require('../models/Bootcamp');
const colors = require('colors');

//@desc         Get all bootcamps
//@route        GET /api/v1/bootcamps
//@access       Public

exports.getBootcamps = async (req, res, next) => {
  try {
    const bootcamps = await Bootcamp.find();
    res
      .status(200)
      .json({ success: true, data: bootcamps, count: bootcamps.length });
  } catch (err) {
    res.status(400).json({ success: false });
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
    res.status(200).json({
      success: true,
      data: bootcamp,
    });
    console.log(`Retrieved Bootcamp ID: ${req.params.id}`.bgCyan.bold);
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

//@desc         Create bootcamp entry
//@route        GET /api/v1/bootcamps/:id
//@access       Private
exports.createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);
    console.log(req.body);
    res.status(201).json({ success: true, data: bootcamp });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

//@desc         Update single bootcamps
//@route        PUT /api/v1/bootcamps/:id
//@access       Private
exports.updateBootcamp = async (req, res, next) => {
  try {
    /**
     * Updates a bootcamp by its ID with the provided data.
     *
     * @param {Object} req - The request object.
     * @param {Object} req.params - The request parameters.
     * @param {string} req.params.id - The ID of the bootcamp to update.
     * @param {Object} req.body - The data to update the bootcamp with.
     * @returns {Promise<Object>} The updated bootcamp object.
     */
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!bootcamp) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: bootcamp });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

//@desc         Delete single bootcamps
//@route        DELETE /api/v1/bootcamps/:id
//@access       Private
exports.deleteBootcamp = async (req, res, next) => {
  try {
    /**
     * Deletes a bootcamp by its ID.
     *
     * @param {Object} req - The request object.
     * @param {Object} req.params - The request parameters.
     * @param {string} req.params.id - The ID of the bootcamp to delete.
     * @returns {Promise<Object|null>} The deleted bootcamp object if found, otherwise null.
     */
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
    if (!bootcamp) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};
