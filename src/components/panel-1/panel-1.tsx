import {
  Component,
  ComponentInterface,
  State,
  h,
  Prop,
  EventEmitter,
  Event,
} from "@stencil/core";


@Component({
  tag: "left-panel",
  styleUrl: "panel-1.css",
  shadow: true
})
export class Panel1 implements ComponentInterface {
  @Prop() selectedData; 
  

  @Event() loadDataset: EventEmitter<any>;
  loadData() {
    this.loadDataset.emit({ loadDataset: true });
  }

  @State() isSettingExpanded: boolean = false;

  renderTitle() {
    return <div>Tooltio</div>;
  }

  render() {
    return (
      <div id="mySidenav" class="sidenavs">
        <ul id="listvar" class="dropdown-content  s12"></ul>
        <div class="row s12">
          <ul id="leftpanel" class="collapsible">
            <li class="searchPanel">
              <div class="collapsible-header search-wrapper focused">
                <input
                  type="text"
                  id="search"
                  placeholder="Search host e.g compute-1-1"
                  style={{ color: "white" }}
                />
                <i class="material-icons" style={{ margin: "auto" }}>
                  search
                </i>
              </div>
              <div class="collapsible-body">
                <ul id="compute-list"></ul>
              </div>
            </li>
            <li class="active">
              <div
                class="collapsible-header"
                onClick={() => {
                  this.isSettingExpanded = !this.isSettingExpanded;
                }}
              >
                <i class="material-icons">settings</i> Setting
              </div>
              <div
                class="collapsible-body"
                style={{ display: this.isSettingExpanded ? "block" : "none" }}
              >
                <div class="current-dataset row valign-wrapper">
                  <div class="col s4 right-align">
                    <span style={{ display: "inline-block", margin: "0" }}>
                      Data
                    </span>
                    <i class="fa fa-database"></i>
                  </div>
                  <div
                    class="col s7 no-padding"
                    title="{{Dataset.currentDataset.name}}"
                  >
                    <span class="dataset-name col s8 truncate no-padding">
                    </span>
                    <button
                      id="select-data"
                      class="btn btn-sm btn-outline"
                      onClick={() => this.loadData()}
                    >
                      Change
                    </button>
                  </div>
                  <div class="col s1">
                    <button
                      class="information"
                      data-target="datainformation"
                      data-title="Dataset information"
                      title="testing tooltip"
                    >
                      i
                    </button>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="collapsible-header">
                <i class="material-icons">help</i>Controls
              </div>
              <div class="collapsible-body">
                <p>
                  <strong>Brush</strong>: Drag vertically along an axis.
                  <br />
                  <strong>Remove Brush</strong>: Tap the axis background.
                  <br />
                  <strong>Reorder Axes</strong>: Drag a axis label horizontally.
                  <br />
                  <strong>Invert Axis</strong>: Tap an axis label.
                  <br />
                  <strong>Remove Axis</strong>: Drag axis label to the left
                  edge.
                  <br />
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
