const Record = require('../record')
const SEED_RECORDS = []

require('../../config/mongoose')(SEED_CATEGORIES, Record)