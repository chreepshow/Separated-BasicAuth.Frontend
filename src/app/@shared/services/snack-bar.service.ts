import { Injectable, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackBarService {
  snackBar = inject(MatSnackBar);

  openSnackBar(message: string) {
    this.snackBar.open(message, $localize`:@@SNACK_BAR_SERVICE__CLOSE:Close`, {
      duration: 3000,
    });
  }
}
