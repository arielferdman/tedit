var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var State = /** @class */ (function () {
    function State() {
        this.editor = document.querySelector('#editor');
        this.suggester = document.querySelector('#suggester');
        this.actions = [];
        this.enter();
    }
    State.prototype.transition = function (to) {
        this.exit();
        to.enter();
        return to;
    };
    State.prototype.exit = function () {
        return true;
    };
    State.prototype.enter = function () {
        return true;
    };
    return State;
}());
var MetaState = /** @class */ (function (_super) {
    __extends(MetaState, _super);
    function MetaState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MetaState.prototype.clear = function () {
        this.suggester.innerHTML = 'caps';
        return true;
    };
    MetaState.prototype.enter = function () {
        this.clear();
        return true;
    };
    return MetaState;
}(State));
var EditState = /** @class */ (function (_super) {
    __extends(EditState, _super);
    function EditState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EditState.prototype.enter = function () {
        this.focusEditor();
        return true;
    };
    EditState.prototype.printchr = function (chr) {
        this.editor.innerHTML += chr;
        return true;
    };
    EditState.prototype.focusEditor = function () {
        this.editor.focus();
        return true;
    };
    return EditState;
}(State));
var EditorStateChart = /** @class */ (function (_super) {
    __extends(EditorStateChart, _super);
    function EditorStateChart() {
        var _this = _super.call(this) || this;
        _this.state = new EditState();
        return _this;
    }
    return EditorStateChart;
}(State));
window.onload = function () {
    var esc = new EditorStateChart();
    esc.state.transition(new MetaState());
};
