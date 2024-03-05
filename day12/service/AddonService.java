package mobilerecharge.meenakshi.service;

import mobilerecharge.meenakshi.dto.request.AddonRequest;
import mobilerecharge.meenakshi.dto.response.AddonListResponse;
import mobilerecharge.meenakshi.dto.response.AddonResponse;

public interface AddonService {
    AddonResponse createAddon(AddonRequest addon);
    AddonListResponse getAllAddons();
    AddonResponse updateAddon(int addonid, AddonRequest request);
}