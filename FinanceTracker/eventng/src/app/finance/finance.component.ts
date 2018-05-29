import {
  Finance
} from './../models/finance';
import {
  FinanceService
} from './../finance.service';
import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css']
})
export class FinanceComponent implements OnInit {

  constructor(private financeService: FinanceService) { }

  finances = [];

  finance = new Finance();
  title = 'Finance Tracker';
  selected = null;
  editFinance = null;

  // End of fields.
  displayFinance = function (finance) {
    this.selected = finance;
  };

  displayTable = function () {
    return this.selected = null;
  };

  setEditFinance = function (selected) {
    this.editFinance = Object.assign({}, this.selected);
  };

  reload() {
    return this.financeService.index().subscribe(
      data => this.finances = data,
      error => console.log(error)
    );
  }

  addFinance = function () {
    this.financeService.create(this.finance).subscribe(
      data => {
        this.Finance = new Finance();
        this.reload();
      },
      error => console.log(error));
  };

  updateFinance(id: number, finance: Finance) {
    this.financeService.update(id, finance).subscribe(
      data => {
        this.reload();
      },
      error => console.log('KABOOM ERROR IN UPDATE COMPONENT'));
    this.selected = null;
    this.editFinance = null;
  }

  deleteFinance(id: number) {
    return this.financeService.destroy(id).subscribe(
      data => {
        this.reload();
      },
      error => console.log('KABOOM ERROR IN DELETE COMPONENT'));
  }

  cancel = function () {
    this.editFinance = null;
  };


  ngOnInit() {
    this.reload();
  }

}
