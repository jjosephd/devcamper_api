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
const ErrorResponse = require('../utils/errorResponse');

//@desc         Get all bootcamps
//@route        GET /api/v1/bootcamps
//@access       Public

exports.getBootcamps = async (req, res, next) => {
  try {
    const bootcamps = await Bootcamp.find();
    res
      .status(200)
      .json({ success: true, count: bootcamps.length, data: bootcamps });
  } catch (err) {
    next(new ErrorResponse(`No bootcamps available`, 404));
  }
};

//@desc         Get single bootcamp
//@route        GET /api/v1/bootcamps/:id
//@access       Public

exports.getBootcamp = async (req, res, next) => {
  try {
    /**
     * Retrieves a bootcamp by its ID.
     * Await the Bootcamp model's findById method, passing in the ID from the request parameters.
     * If no bootcamp is found, return a 400 response with a success property of false.
     * Otherwise, return a 200 response with a success property of true and the bootcamp data.
     * Log a message to the console indicating the bootcamp ID that was retrieved.
     * */
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
    // Throw new error response with the message and status code
    next(
      new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
    );
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
    next(error);
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
      next(
        new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
      );
    }
    res.status(200).json({ success: true, data: bootcamp });
  } catch (err) {
    next(
      new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
    );
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
