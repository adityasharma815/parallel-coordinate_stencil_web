import { Component, Prop, h, Watch } from '@stencil/core';


@Component({
  tag: 'layout-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {
  /**
   * DataSet which needs to be poured in the visualization, can be a url to file 
   */
  @Prop() selectedDataset;

  /**
   * Single data
   */
  @Prop() singleData: string;

  /**
   * The last name
   */
  @Prop() last: string;
  @Prop() dataUrl: string;

  // @Watch('selectedDataset')
  // objectDataWatcher(newValue:  JSON, valString: string) {
  //   if (typeof newValue === 'string') {
  //     this.selectedDataset = JSON.parse(newValue);
  //     this.dataUrl = valString;
  //   }
  //   else {
  //     this.selectedDataset = newValue;
  //     this.dataUrl = valString;
  //   }
  // }
  // componentWillLoad() {
  //   this.objectDataWatcher(this.selectedDataset, this.dataUrl);
  // }


  render() {
    
    return 	<div class="main-body">
		<div class="header">
			Main Header
      <button class="theme-button"> Theme</button>
		</div>
		<div class="main">
			<div class='main-left-panel' id='main-left-panel'>
        <left-panel selectedData={this.selectedDataset}></left-panel>
			</div>
			<div class="main-right-panel" id="main-right-panel" >
        <parallel-coordinates singleData={this.singleData} dataUrl= {this.dataUrl}></parallel-coordinates>
			</div>
		</div>
	</div>;
  }
}
