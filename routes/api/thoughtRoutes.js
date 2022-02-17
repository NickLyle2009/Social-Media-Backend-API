const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addTag,
  removeTag,
} = require('../../controllers/appController');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// /api/thoughts/:thoughtId/tags
router.route('/:thoughtId/tags').post(addTag);

// /api/thoughts/:thoughtId/tags/:tagId
router.route('/:thoughtId/tags/:tagId').delete(removeTag);

module.exports = router;
// **`/api/thoughts`**

// * `GET` to get all thoughts

// * `GET` to get a single thought by its `_id`

// * `POST` to create a new thought (don't forget to push the created thought's `_id` to the associated user's `thoughts` array field)

// ```json
// // example data
// {
//   "thoughtText": "Here's a cool thought...",
//   "username": "lernantino",
//   "userId": "5edff358a0fcb779aa7b118b"
// }
// ```

// * `PUT` to update a thought by its `_id`

// * `DELETE` to remove a thought by its `_id`
