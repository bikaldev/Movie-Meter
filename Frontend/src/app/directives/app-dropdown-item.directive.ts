import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appDropdownItem]'
})
export class DropdownItemDirective {
    
    isSelected: boolean;
    
    constructor(private elRef: ElementRef, private renderer: Renderer2) {
        this.isSelected = false;
    }

    @HostListener('click') mouseClick(event: Event) {
        if(this.isSelected) {
            this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'white');
            this.renderer.setStyle(this.elRef.nativeElement, 'color', 'black');
        } else {
            this.renderer.setStyle(this.elRef.nativeElement, 'background-color', '#007bff');
            this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');
        }
        this.isSelected = !this.isSelected;
        
    }


}