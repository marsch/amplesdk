/*
 * Ample SDK - JavaScript GUI Framework
 *
 * Copyright (c) 2011 Sergey Ilinsky
 * Dual licensed under the MIT and GPL licenses.
 * See: http://www.amplesdk.com/about/licensing/
 *
 */

var cXSElement_minScale	= function(){};
cXSElement_minScale.prototype    = new cXSElement("minScale");

cXSElement_minScale.handlers	= {};
cXSElement_minScale.handlers.DOMNodeInsertedIntoDocument	= function(oEvent) {
	var oType	= this.parentNode.$type;
	//
	var sValue	= this.attributes["value"];
	if (sValue) {
		var oFacet	= new cXSFacet;
		// XSFacet
		oFacet.lexicalFacetValue	= sValue;
		oFacet.fixed	= this.attributes["fixed"] == "true";
		oFacet.facetKind= cXSSimpleTypeDefinition.FACET_MAXSCALE;

		// Add facet to type
		oType.facets.$add(oFacet);
	}
};

// Register Element
ample.extend(cXSElement_minScale);