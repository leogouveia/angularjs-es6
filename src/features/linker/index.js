import template from './linker.html';
import linkerController from './linker.controller';


const LinkerComponent = {
    controller: linkerController,
    template,
    bindings: {
        someInput: '<',
        someOutput: '&'
    }
}

export default angular.module('linker.component', [])
    .component('linker', LinkerComponent)
    .name;