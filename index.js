module.exports = {
  rules: {
    "elements": {
      create: function (context) {
        var options = context.options;
        if(options && options.length>0 && options[0].restrict){
          var restrict = options[0].restrict
          return {
            JSXOpeningElement(node) {
              if(node.name.type == "JSXIdentifier" && restrict[node.name.name]) {
                context.report({
                  node,
                  message: typeof restrict[node.name.name].message == "string" ? restrict[node.name.name].message :
                   node.name.name +" is restricted and should not be used."
                });
              }
            }
          }
        }else{
          return {}
        }
      }
    }
  }
};
