import { db } from "../../db.js";
export const resolvers = {
    Query: {
        products: () => db.products,
        product: (parent, args, context) => {
            const result = db.products.find(pd => pd.id === args.productId);
            return result;
        },
        categories: () => db.categories,
        category: (parent, args, context) => {
            const result = db.categories.find(pd => pd.id === args.categoryId);
            return result;
        }
    },
    Product: {
        category: (parent, args, context) => {
            // console.log(parent.categoryId)
            const result = db.categories.find(category => category.id === parent.categoryId);
            return result;
        },
        reviews: (parent, args, context) => {
            const result = db.reviews.filter(review => review.productId === parent.id);
            return result;
        }
    },
    Category: {
        products: (parent, args, context) => {
            // console.log(parent)
            const result = db.products.filter(product => product.categoryId === parent.id);
            return result;
        }
    }
};
