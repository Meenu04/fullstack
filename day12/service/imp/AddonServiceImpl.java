package mobilerecharge.meenakshi.service.imp;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

import mobilerecharge.meenakshi.dto.request.AddonRequest;
import mobilerecharge.meenakshi.dto.response.AddonListResponse;
import mobilerecharge.meenakshi.dto.response.AddonResponse;
import mobilerecharge.meenakshi.model.Addon;
import mobilerecharge.meenakshi.repository.AddonRepository;
import mobilerecharge.meenakshi.service.AddonService;

@Service
public class AddonServiceImpl implements AddonService {

    @Autowired
    private AddonRepository addonRepository;

    @Override
    public AddonResponse createAddon(AddonRequest addonRequest) {
        Addon addon = Addon.builder()
                            .addonname(addonRequest.getAddonname())
                            .description(addonRequest.getDescription())
                            .price(addonRequest.getPrice())
                            .validity(addonRequest.getValidity())
                            .build();

        addonRepository.save(addon);

        return AddonResponse.builder().message("Addon added successfully").build();
    }

    @Override 
    public AddonListResponse getAllAddons(){
        List<Addon> addons = addonRepository.findAll();
        return AddonListResponse.builder().addons(addons).build();
    }


    @Override
    public AddonResponse updateAddon(int addonid, AddonRequest addonRequest) {
        AddonResponse response = new AddonResponse();
        Optional<Addon> addonOptional = addonRepository.findById(addonid);
        if (addonOptional.isPresent()) {
            Addon addon = addonOptional.get();
            // Update addon properties from the request
            addon.setAddonname(addonRequest.getAddonname());
            addon.setDescription(addonRequest.getDescription());
            addon.setPrice(addonRequest.getPrice());
            addon.setValidity(addonRequest.getValidity());
            // Save the updated addon
            addonRepository.save(addon);
            response.setMessage("Addon updated successfully");
        } else {
            response.setMessage("Addon not found");
        }
        return response;
    }
    

}