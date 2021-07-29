const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
//GET all catergories
router.get('/', async (req, res) => {
  // be sure to include its associated Products
  try {
    //find all category and include product
    const categoryData = await Category.findAll({
      attributes: ['id', 'category_name'],
      include: [
        {
          model: Product,
          attributes: ['id', 'product_name', 'price', 'stock', 'category_id'],
        },
      ],
    });
    res.status(200).json(categoryData);

  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

//GET one category by id
router.get('/:id', async (req, res) => {
  try {
    //find by the id 
    const categoryData = await Category.findByPk(req.params.id, {
      attributes: ['id', 'category_name'],
      include: [
        {
          model: Product,
          attributes: ['id', 'product_name', 'price', 'stock', 'category_id'],
        },
      ],
    });

    //If there are no catergories that match the id send an error 404 
    if (!categoryData) {
      res.status(404).json({ message: 'No Catergory found with that id' });
      return;
    }
    res.status(200).json(categoryData);

  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }

});

//CREATE a category
router.post('/', async (req, res) => {
  try {
    const categoryData = await Category.create({
      category_name: req.body.category_name
    });
    res.status(200).json(categoryData);

  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

//UPDATE category by id
router.put('/:id', async (req, res) => {
  //Updating the category where the id is equal to req.body.id
  try {
    const categoryData = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    //If no category found send 404 error message
    if (!categoryData[0]) {
      res.status(404).json({ message: 'No catergory with this id' });
    }
    res.status(200).json(categoryData);


  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }

});

//DELETE a catergory by id
router.delete('/:id', async (req, res) => {
  //Delete category where the id the id
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });

    //If there is no catergory with that id send error 404 message
    if (!categoryData) {
      res.status(404).json({ message: 'There is no catergory with that id' });
      return;
    }
    res.status(200).json(categoryData);


  } catch (error) {
    console.log(error);
    res.status(500).json(error);

  }

});

module.exports = router;
