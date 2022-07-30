import safetyPage from '../pageobjects/safety.page';
import resources from '../resources';

describe('Safety Page', () => {
    before(() => {
            safetyPage.open();  
            browser.maximizeWindow();
            $('#onetrust-accept-btn-handler').click();       
        });

        it('should show the header container', async () => {
            await expect(safetyPage.infoHeader).toHaveTextContaining(resources.headerTitle);
        });

        it('should verify the volvo label and verify the url', async () => {
            await expect(safetyPage.logoLabel).toHaveHrefContaining(resources.volvoHref);
        });

        it('should verify our cars button is clickable', async () => {
            await expect(safetyPage.ourCars).toBeClickable();
        });    
        
        it('should verify menu button is clickable', async () => {
            await expect(safetyPage.menu).toBeClickable();
        });     

        it('should show the button on the video and it should be clickable', async () => {
            await expect(safetyPage.showButtonOnVideo).toBeClickable();
        });

        it('should show the text on the button in the video', async () => {
            await expect(safetyPage.textOnTheButton).toHaveTextContaining(resources.buttonText);
        });

        it('should show the list of car models and verify the total', async () => {   
            await expect(await safetyPage.listOfCarModel.length).toBeGreaterThanOrEqual(8);
        });

        it('should contain link on the recharge text and verify the href', async () => {
            await expect(safetyPage.rechargeCarModel).toHaveHrefContaining(resources.rechargeCarModelHref);
        });

        it('should contain link on the mild hybrid cars text and verify the href', async () => {
            await expect(safetyPage.hybridCarModel).toHaveHrefContaining(resources.hybridCarModelHref);
        });

        it('should contain safety features and verify the count', async () => {
            await expect(await safetyPage.SafetyFeatures.length).toEqual(4);
        });
      
        it('should verify the safety features in the cars', async () => {
            await expect(await safetyPage.getSafetyFeaturesNames()).toEqual(resources.safetyFeatures);
        });

        it('should contain video testimonial and verify the count', async () => {
            await expect(await safetyPage.videoTestimonials.length).toEqual(4);
        });
        
        it('should verify the video testimonial names', async () => {
            await expect(await safetyPage.getVideoTestimonialNames()).toEqual(resources.videoTestimonialNames);
        });

        it('should have hybrid models and verify the length', async () => {
            await expect(await safetyPage.plugInHybridModel.length).toBeGreaterThanOrEqual(8);
        });
        
        it('should have hybrid models and verify the names', async () => {
            await expect(await safetyPage.getHybridModelCount()).toEqual(resources.hybridCarModelNames);
        });
});