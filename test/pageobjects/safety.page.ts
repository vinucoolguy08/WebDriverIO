import { getListOfNames } from '../utilities/helper';
import { getHybridModelNames } from '../utilities/helper';

import Page from './page';

class SafetyPage extends Page {

    get infoHeader () {
        return $('h2[class*=av]');
    }

    get logoLabel () {
        return $('a[data-autoid="nav:siteNavLogoSmall"]');
    }

    get showButtonOnVideo () {
        return $('button[class*=ep]');
    }

    get ourCars () {
        return $('button[data-autoid="nav:topNavCarMenu"]');
    }

    get menu () {
        return $('#sitenav-sidenav-toggle');
    }

    get textOnTheButton () {
        return $('span=watch the story');
    }

    get listOfCarModel () {
        return $$('div[data-autoid*=springCarouselPane]');
    }

    get rechargeCarModel () {
        return $('a[data-autoid*=ProductListCarousel\\:cta1]');
    }

    get hybridCarModel () {
        return $('a[data-autoid*=ProductListCarousel\\:cta2]');
    }

    get videoTestimonials ()
    {
        return $$('div[data-autoid="videoTestimonials\\:container"]');
    }

    get videoTestimonialsPersonNames ()
    {
        return $$('div[data-autoid="videoTestimonials\\:container"] em');
    }

    get plugInHybridModel () {
        return $$('span[data-autoid*=productListCarouselItem\\:modelName]');
    }

    get nextButton () {
        return $('button[data-autoid*=springCarouselNextButton]');
    }

    get SafetyFeatures () {
        return $$('div[data-autoid="iconCallouts:iconTextItem"] em');
    }

    async getSafetyFeaturesNames ()
    {
       return getListOfNames(await this.SafetyFeatures);
    }

    async getVideoTestimonialNames ()
    {
       return getListOfNames(await this.videoTestimonialsPersonNames);
    }

    async getHybridModelCount()
    {
        return getHybridModelNames(await this.plugInHybridModel, await this.nextButton);
    }

    open () {
        return super.open();
    }
}

export default new SafetyPage();
