import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatChipsModule} from '@angular/material/chips';
import {MatProgressBarModule} from '@angular/material/progress-bar';


@NgModule({
    imports:[MatToolbarModule, MatButtonModule, MatCardModule, MatTableModule, MatIconModule, MatSelectModule, MatMenuModule, MatInputModule, MatDialogModule, MatChipsModule, MatProgressBarModule],
    exports:[MatToolbarModule, MatButtonModule, MatCardModule, MatTableModule, MatIconModule, MatSelectModule, MatMenuModule, MatInputModule, MatDialogModule, MatChipsModule, MatProgressBarModule],
})

export class MaterialModule{ }