/**
 * Add to cart base component
 */

(function (klevu) {

    function klevu_addtocart(id, qty) {
        var el = document.createElement("a");
        el.setAttribute("data-post", '{"action":"/checkout/cart/add/product/' + id + '/qty/' + qty + '/","data":{"product":"' + id + '","qty":"' + qty + '"}}');
        el.style.width = "0px !important";
        el.style.height = "0px !important";
        document.body.appendChild(el);
        el.click();
        document.body.removeChild(el);
    }

    /**
     * Function to send Add to cart request
     * @param {*} scope
     * @param {*} variantId
     * @param {*} quantity
     */
    function sendAddToCartRequest(variantId, quantity) {
        klevu_addtocart(variantId, quantity);
        return;
        /*var formKeyM2 = jQuery.cookie('form_key');
        var requestPayload = {
            product: variantId,
            id: variantId,
            quantity: quantity,
            qty: quantity,
            form_key:formKeyM2
        };

        variantId = 84;

        var formData = new FormData();
        formData.append("product", variantId);
        formData.append("selected_configurable_option", "");
        formData.append("related_product", "");
        formData.append("form_key", formKeyM2);
        formData.append("qty",2);

        klevu.ajax("/checkout/cart/add/product/" + variantId + "/qty/" + quantity+"/form_key/"+formKeyM2, {
            method: "POST",
            mimeType: "application/json; charset=UTF-8",
            processData: false,
            contentType: false,
            data: formData,
            crossDomain: true,
            success: function (klXHR) {
                require('Magento_Customer/js/customer-data').reload(['cart'], false);
                require('Magento_Customer/js/customer-data').reload(['messages'], false);
            },
            error: function (klXHR) {
            },
            done: function (klXHR) {
            }
        });*/
    }

    var addToCart = {
        sendAddToCartRequest: sendAddToCartRequest
    };

    klevu.extend(true, klevu.search.modules, {
        addToCart: {
            base: addToCart,
            build: true
        }
    });

})(klevu);

/**
 * addToCart module build event
 */
klevu.coreEvent.build({
    name: "addToCartModuleBuild",
    fire: function () {
        if (!klevu.search.modules ||
            !klevu.search.modules.addToCart ||
            !klevu.search.modules.addToCart.build) {
            return false;
        }
        return true;
    },
    maxCount: 500,
    delay: 30
});
