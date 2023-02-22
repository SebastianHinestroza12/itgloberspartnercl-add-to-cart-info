📢 Use this project, [contribute](https://github.com/{OrganizationName}/{AppName}) to it or open issues to help evolve it using [Store Discussion](https://github.com/vtex-apps/store-discussion).

# Add To Cart Info

![All Contributors](https://img.shields.io/badge/all_contributors-1-green.svg?style=flat-square)


This component will display product information when adding to the shopping list


<img  alt="image" src="https://res.cloudinary.com/dafsjo7al/image/upload/v1677036452/add_ntgtfb.png">

## Configuration 

1. Import the Add To Cart Info app to your theme's dependencies in the manifest.json, for example:
```json
  "dependencies": {
    "{vendor}.add-to-cart-info": "0.x"
  }
 ```
 
 2. Add the add-to-cart-info block to the store-theme. for example:
```json
 {
  "modal-trigger#add-to-cart-info": {
    "children": [
      "modal-layout#add-to-cart-info"
    ],
    "props": {
      "customPixelEventName": "addToCart"
    }
  },
  "modal-layout#add-to-cart-info": {
    "children": [
      "modal-header#add-to-cart-info",
      "add-to-cart-info"
    ],
    "props": {
      "blockClass": "modal__add--to--cart"
    }
  }
}
   ```
 
## Customization

No CSS Handles are available yet for the app customization.

<!-- DOCS-IGNORE:start -->

## Contributors ✨

SEBASTIAN MENA
<!-- DOCS-IGNORE:end -->

---- 

Check out some documentation models that are already live: 
- [Breadcrumb](https://github.com/vtex-apps/breadcrumb)
- [Image](https://vtex.io/docs/components/general/vtex.store-components/image)
- [Condition Layout](https://vtex.io/docs/components/all/vtex.condition-layout@1.1.6/)
- [Add To Cart Button](https://vtex.io/docs/components/content-blocks/vtex.add-to-cart-button@0.9.0/)
- [Store Form](https://vtex.io/docs/components/all/vtex.store-form@0.3.4/)
