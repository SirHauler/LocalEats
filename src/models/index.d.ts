import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

type VendorInfoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerVendorInfo = {
  readonly id: string;
  readonly specialities?: string | null;
  readonly rating?: number | null;
  readonly hours?: string | null;
  readonly address?: string | null;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyVendorInfo = {
  readonly id: string;
  readonly specialities?: string | null;
  readonly rating?: number | null;
  readonly hours?: string | null;
  readonly address?: string | null;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type VendorInfo = LazyLoading extends LazyLoadingDisabled ? EagerVendorInfo : LazyVendorInfo

export declare const VendorInfo: (new (init: ModelInit<VendorInfo, VendorInfoMetaData>) => VendorInfo) & {
  copyOf(source: VendorInfo, mutator: (draft: MutableModel<VendorInfo, VendorInfoMetaData>) => MutableModel<VendorInfo, VendorInfoMetaData> | void): VendorInfo;
}