import {
  Component,
  ComponentInterface,
  Host,
  h,
  Prop,
  State,
  EventEmitter,
  Event,
} from "@stencil/core";

@Component({
  tag: "dataselction-modal",
  styleUrl: "dataselction-modal.css",
})
export class DataselctionModal implements ComponentInterface {
  @Prop() sampleData;

  @Prop() selectedData;
  @State() fileName;

  @State() isSelectionTabActive: boolean = true;

  @State() fileInfo;

  @Event() dataSelected: EventEmitter<any>;
  setDataHandler(value) {
    console.log("value", value);
    this.dataSelected.emit(value);
  }

  readSingleFile() {
    const info = {
      close: false,
      newData: {
        name: this.fileName,
        formatType: this.fileInfo.type,
        date: new Date(this.fileInfo.lastModified),
        data: null,
      },
    };
    var f = this.fileInfo.files[0];
    if (f) {
      var r = new FileReader();
      r.onload = function (e) {
        var contents = e.target.result;
        // const csvData = d3.csvParse(contents);
        info.newData.data = contents;
      };
      r.readAsText(f);
    } else {
      alert("Failed to load file");
    }
    this.setDataHandler(info);
  }

  submitFile() {
    this.readSingleFile();
  }

  getName(event: Event) {
    // TODO validate extension and handle accordingly
    this.fileInfo = event.target as HTMLInputElement;
    const file: File = this.fileInfo.files[0];
    this.fileName = file.name;
  }

  selectDataset(dataset) {
    this.setDataHandler({ close: false, selectedData: dataset, newData: {} });
  }

  renderDatasetList() {
    return this.sampleData.map((dataset) => {
      return (
        <li>
          <a
            class="dataset"
            onClick={() => this.selectDataset(dataset)}
            // ng-disabled={{ === dataset.id}}
          >
            <i class=" icon-small material-icons">storage</i>
            <strong>{dataset.name}</strong>
          </a>
        </li>
      );
    });
  }

  render() {
    return (
      <Host>
        <div>
          <div class="modal">
            <div class="modal-dialog" role="dialog" aria-hidden="true">
              <div class="modal-content">
                <div class="modal-header">
                  <button aria-label="Close" class="close" type="button">
                    <clr-icon aria-hidden="true" shape="close"></clr-icon>
                  </button>
                  <h3 class="modal-title">Add Dataset</h3>
                </div>
                <div class="modal-body">
                  <ul id="demoTabs" class="nav" role="tablist">
                    <li role="presentation" class="nav-item">
                      <button
                        id="tab1"
                        class={`${
                          this.isSelectionTabActive ? "active" : null
                        } btn btn-link nav-link`}
                        type="button"
                        onClick={() => (this.isSelectionTabActive = true)}
                      >
                        Change Dataset
                      </button>
                    </li>
                    <li role="presentation" class="nav-item">
                      <button
                        id="tab2"
                        class={`${
                          !this.isSelectionTabActive ? "active" : null
                        } btn btn-link nav-link`}
                        type="button"
                        onClick={() => (this.isSelectionTabActive = false)}
                      >
                        Paste or Upload Data
                      </button>
                    </li>
                  </ul>
                  {this.isSelectionTabActive ? (
                    <section
                      id="content-1"
                      role="tabpanel"
                      aria-labelledby="tab1"
                    >
                      <div class="change-loaded-dataset">
                        <h6>Explore a Sample Dataset</h6>
                        <ul class="loaded-dataset-list">
                          {this.renderDatasetList()}
                        </ul>
                      </div>
                    </section>
                  ) : (
                    <section id="panel2" role="tabpanel" aria-labelledby="tab2">
                      <form
                        method="post"
                        enctype="multipart/form-data"
                        id="frm_upload"
                        action="/data"
                      >
                        <div id="div_upload" class="drop-box">
                          Click or Drag & Drop here
                        </div>
                        <input
                          type="file"
                          id="input_upload"
                          name="input_upload"
                          onChange={() => this.getName(event)}
                        />
                      </form>
                      <p>{this.fileName}</p>
                      <div class="modal-footer">
                        <button
                          class="btn btn-outline"
                          type="button"
                          onClick={() => this.setDataHandler({ close: false })}
                        >
                          Cancel
                        </button>
                        <button
                          class="btn btn-primary"
                          type="button"
                          onClick={() => this.submitFile()}
                          disabled={!this.fileName}
                        >
                          Add File
                        </button>
                      </div>
                    </section>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
