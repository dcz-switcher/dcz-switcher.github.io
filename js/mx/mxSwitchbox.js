/*
|------------------------------------------------------------
| directive for AngularJS to have use a simple switchbox
|------------------------------------------------------------
|
    how to use :
    1 - load js in your html :
     <script src="js/mx/mxSwitchbox.js"></script>

    2 - add the module to your application module
     <script>
        (function () {
            var myApplication = angular.module('MyApplication', ['mx']);
        }());
     </script>

    3 - use it in html
    // for example you want to bind to the value isShiny in your controller :
    myApplication.controller('MyController', [function () {
        this.isShiny = true;
    }]);

    // you can bind with switched attribute :
    <div ng-controller="MyController as myCtrl">
        <div mx-switchbox switched="myCtrl.isShiny"></div>
    </div>
*/
angular.module('mx', []).directive('mxSwitchbox', [function () {
    return {
        template :  '<div style="display:inline-block;vertical-align:middle;">'+
        '<input type="checkbox" autocomplete="off" ng-model="switched" style="width:44px;height:20px;opacity:0;float:left;cursor:pointer;">'+
        '<div style="width:44px;height:20px;background-position: {{switched == true && \'bottom\' || \'top\'}};background-repeat:no-repeat;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAoCAYAAACFFRgXAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAN1wAADdcBQiibeAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAARBSURBVFiF1ZdNSBtbGIafc2YgMSKlqxqiBqtdKLhoEyiWSlGKuLi4r2AKQjfu+kOyyCJ0YSFC21XdFLk0XXQvXJBC0hYX3STtIqBQhZCgxE3JYto0gs65izGtmhhNJnO5vjAMw/nmnYfDd855RyilOKmnT5/qHo9nSikVME0zKIQIAN6awvaqqJTKABlN09Llcnk1FovtnywSJ4EXFxeHlFIJn88X9Pv9eL1euru7Adjd3aVYLJLP59nZ2XGYn7QQIhQOhzdOAxbxePyh2+1emJiYcI+MjDR0y2azJJNJ9vb2HOIFoAJEI5HIS0AdA47H4496enqeT09P09XVdS43wzBYWVlhe3vbKeCqHkcikRdwCLy4uDjkcrm+zM3Nuc8LW5VhGCwvLzs+00KIG+FweEMTQui6rv8zOTnZ19vb27STy+Wis7OTzc1NBzh/SwduJpPJv6XH45ny+XzBs3q2kUZGRvD5fO3Dq6+gx+OZkgcHB0G/32/brR0eZ+ng4CAogYDXa3+LbYfHORSQQohAdZ+1o3Z4nCUhREA6/pU2SyqlMru7u7aN2uFxlpRSGQlkisWibbN2eJxDGalpWjqfz9t2aofHWdI0LS3L5fLqzs5OOpvNtmyUzWb/kzBULpdXZSwW2xdChFKpVMUwjKZdDMMgmUw6wHdMFSFEKBaL7UuAcDi8UalUoisrKzQDXQ0/DucIgGg1Zl7ceFnVRQrwv/V//kXS670Z+/gR+vqsByGchKyVEGCaUChALFY7XDPDodAQUiaAoKNgg4MwPAz9/dYFkMtZ1/o6bG2lMc0QicQpLSGEIBR6iBALgNsx0I4OmJmBsbHGdWtr8O5dhZ8/oyQSLzkE/QN8//4jhHhuC8bthkrl9PFr12B+Hi5fPp9fqQRLS/Dt22PevHkBYKW1UGjocGZb1+goxOPQ01N/vKOjOViwaufnobNzgVBoyAIeH9cPe7b1NhgdhQcP4NIliETgypXampmZ5mCPQt+750bKBOPjuk5f3xR2FlgVVh5G660t+P79eM3g4Nk920hjY/DpUxClpiRStg/261d49Qr2T2yfw8Otwx71kDIoUSpwatHAANy5Yw8W/mxbdtTfD0oFdKA+8MAAPHlirXxNg1SqNdh2AkOg7kkHwO3b1soGmJ217qlU87Btlg5kgL9qRt6+tWZ3dNQ6Lmdn4epVuHWredhcDq5ft0eaywFkJEJk6haYJrx+DZ8/W89CWLPeysxaH7MPLERGYprpU4tOQlfVbBusr9sgPeJhmmlJobAKnB+6lZ7d2rKyQataW7PCUKGwamUJK6F9odFpJyXcvWstvFYWWEcHPHvW/GlXKkE0WuHHjxskEhtWQyYSGygVbfiiacL7963vBr9+WUGmVGoOdmmJw8R24p/uwsXLqi5MgD+q8fFqKAogRBDrNHT8nw7IIEQG00xTKKzy4UNN//0LmiEobFZeyzgAAAAASUVORK5CYII=);"></div>'+
        '</div>',
        scope: {
            switched:'='
        },
        link : function (scope, element, attrs) {
            scope.$watch('switched', function (newVal, oldVal) {
                scope.inputCheckbox = (newVal === undefined || newVal == false) ? false : true;
            });
        }
    };
}]);
