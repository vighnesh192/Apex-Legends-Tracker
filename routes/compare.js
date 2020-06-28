const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.get('/:platform/:platformUserIdentifier', async (req, res) => {
    
    try {
        const headers = {
            'TRN-Api-Key': process.env.TRACKER_API_KEY
        }

        const {platform, platformUserIdentifier} = req.params;

        const response = await fetch(`${process.env.TRACKER_API_URL}/profile/${platform}/${platformUserIdentifier}`, {
            headers
        });

        const data = await response.json();

        res.json(data);
    } catch (err) {
        console.error(err);
        res.status(500).json({
            'message':'Server Error'
        });
    }
})

module.exports = router;