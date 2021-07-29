const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

//GET all tags
router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll({
      attributes: ['id', 'tag_name'],
      include: [
        {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id'],
        through: ProductTag,
        as: 'products',
      },
    ],
    });
    res.status(200).json(tagData);
    
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
 
});

//GET one tag with id
router.get('/:id', async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [
        {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id'],
        through: ProductTag,
        as: 'products',
      },
    ],
  });
    //If no tag with id send 404 error message
    if(!tagData) {
      res.status(404).json({message: 'No tag with this id found'});
      return;
    }
    res.status(200).json(tagData);
    
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
  
});

//CREATE new tag
router.post('/', async (req, res) => {
 try {
   const tagData = await Tag.create({
     tag_name: req.body.tag_name
   });
   res.status(200).json(tagData);
   
 } catch (error) {
  console.log(error);
   res.status(400).json(error);
   
 }
});

//UPDATE tag with id
router.put('/:id', async (req, res) => {
  try {
    const tagData = await Tag.update(req.body, {
      where: {
        id: req.params.id
      },
    });
    //If no tag has that id send 404 error message
    if (!tagData) {
      res.status(404).json({message: 'There is no tag with that id found'});
      return;
    }
    res.status(200).json(tagData);

  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
 
});

//DELETE tag with id
router.delete('/:id', async (req, res) => {
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });
    //If no tag has that id send 404 error message
    if (!tagData) {
      res.status(404).json({message: 'There is no tag with that id found'});
      return;
    }
    res.status(200).json(tagData);
    
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
 
});

module.exports = router;
